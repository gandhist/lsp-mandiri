<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LevelKantor extends Model
{
    use HasFactory;
    protected $table = 'ms_level_kantor';
    protected $primaryKey = 'id';
    protected $guarded = ['id'];
}
