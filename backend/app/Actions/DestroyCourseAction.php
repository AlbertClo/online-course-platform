<?php

namespace App\Actions;

use App\Models\Course;

class DestroyCourseAction
{
    public function handle(int $courseId): void
    {
        Course::destroy($courseId);
    }
}
