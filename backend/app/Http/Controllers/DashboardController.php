<?php

namespace App\Http\Controllers;

use App\Http\Resources\CourseResource;
use App\Models\Course;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function register(Request $request, $courseId)
    {
        $course = Course::find($courseId);
        if ($course->users()->where('user_id', $request->user()->id)->exists()) {
            return new JsonResponse(['message' => "You're already registered for {$course->name}"], 422);
        }

        $course->users()->attach($request->user()->id);
        return new JsonResponse(['message' => "You now registered for {$course->name}"], 200);
    }

    public function listCourses(Request $request)
    {
        $courses = DB::query()
            ->select('courses.id', 'courses.name', 'courses.description', 'courses.image')
            ->from('courses');

        if ($request->user()->id !== null) {
            $courses
                ->selectRaw('COUNT(users.id) as registration_count')
                ->leftJoin('user_registered_for_course', 'courses.id', '=', 'user_registered_for_course.course_id')
                ->leftJoin('users', 'user_registered_for_course.user_id', '=', 'users.id')
                ->groupBy('courses.id');
        }

        return CourseResource::collection($courses->get());
    }

}
