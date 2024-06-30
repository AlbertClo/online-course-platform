<?php

namespace App\Actions;

use App\Models\Course;

class StoreCourseAction
{
    public function handle(StoreCourseDto $campaignDto): Course
    {
        return Course::create([
            'name' => $campaignDto->name,
            'description' => $campaignDto->description,
            'image' => $campaignDto->image,
        ]);
    }
}
