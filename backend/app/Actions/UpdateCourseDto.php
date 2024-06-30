<?php

namespace App\Actions;

readonly class UpdateCourseDto
{
    public function __construct(
        public string $id,
        public string $name,
        public ?string $description,
        public string $image,
    ) {
    }
}
