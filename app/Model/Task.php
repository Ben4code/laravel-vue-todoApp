<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    //Mass assignment fix (Place in the model)
    protected $fillable = ['name'];

    
}
