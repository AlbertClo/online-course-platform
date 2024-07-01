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
        // We cache the response because it's called from the home page, so it will be called a lot.
        // This way we avoid hitting the database on every request.
        // We cache it forever, so this means we need to manually re-cache it whenever a new course is created, updated or deleted.
        // This way fresh data will always be shown to the user, rather than having stale data for the time of the ttl.
        return cache()->rememberForever('coursesResponse', function () {
            return CourseResource::collection(Course::all());
        });
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

        // Re-cache the courses response
        cache()->forget('coursesResponse');
        cache()->rememberForever('coursesResponse', function () {
            return CourseResource::collection(Course::all());
        });

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

        // Re-cache the courses response
        cache()->forget('coursesResponse');
        cache()->rememberForever('coursesResponse', function () {
            return CourseResource::collection(Course::all());
        });

        return new JsonResponse(['message' => 'Course updated'], 200);
    }

    public function destroy(Request $request, DestroyCourseAction $destroyCourseAction, Course $course): JsonResponse
    {
        $destroyCourseAction->handle($course->id);

        // Re-cache the courses response
        cache()->forget('coursesResponse');
        cache()->rememberForever('coursesResponse', function () {
            return CourseResource::collection(Course::all());
        });

        return new JsonResponse(['message' => 'Course deleted'], 200);
    }
}
