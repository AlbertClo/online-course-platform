<?php

namespace App\Actions;

use App\Models\Course;

class UpdateCourseAction
{
    public function handle(UpdateCourseDto $campaignDto): void
    {
        $course = Course::where('id', $campaignDto->id)->firstOrFail();
        $course->name = $campaignDto->name;
        $course->description = $campaignDto->description;
        $course->image = $campaignDto->image;
        $course->save();
    }
}
