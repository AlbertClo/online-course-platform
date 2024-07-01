<?php

namespace App\Http\Controllers;

use App\Actions\DestroyCourseAction;
use App\Actions\StoreCourseAction;
use App\Actions\StoreCourseDto;
use App\Actions\UpdateCourseAction;
use App\Actions\UpdateCourseDto;
use App\Http\Resources\CourseResource;
use App\Http\Requests\StoreCourseRequest;
use App\Http\Requests\UpdateCourseRequest;
use App\Models\Course;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CoursesController extends Controller
{
    public function index(Request $request)
    {
        return CourseResource::collection(Course::all());
    }

    public function show(Request $request, Course $course)
    {
        sleep(1); // Simulate slow request to show loading state

        return new CourseResource($course);
    }

    public function store(StoreCourseRequest $request, StoreCourseAction $storeCourseAction): JsonResponse
    {
        $storeCourseAction->handle(new StoreCourseDto(
            $request->name,
            $request->description,
            $request->image,
        ));

        return new JsonResponse(['message' => 'Course created'], 201);
    }

    public function update(UpdateCourseRequest $request, UpdateCourseAction $updateCourseAction, int $courseId): JsonResponse
    {
        $updateCourseAction->handle(new UpdateCourseDto(
            $courseId,
            $request->name,
            $request->description,
            $request->image,
        ));

        return new JsonResponse(['message' => 'Course updated'], 200);
    }

    public function destroy(Request $request, DestroyCourseAction $destroyCourseAction, Course $course): JsonResponse
    {
        $destroyCourseAction->handle($course->id);

        return new JsonResponse(['message' => 'Course deleted'], 200);
    }
}
