<?php

use Faker\Generator as Faker;

$factory->define(App\Model\Task::class, function (Faker $faker) {
   
    $title = $faker->sentence;
    
    return [
        'name' => $title,
    ];

});
