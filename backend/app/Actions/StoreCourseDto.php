<?php

namespace App\Actions;

readonly class StoreCourseDto
{
    public function __construct(
        public string $name,
        public ?string $description,
        public string $image,
    ) {
    }
}
