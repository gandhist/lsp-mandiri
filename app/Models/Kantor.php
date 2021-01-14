<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Kantor extends Model
{
    use HasFactory;
    use SoftDeletes;
    protected $table = 'kantor';
    protected $primaryKey = 'id';
    protected $guarded = ['id'];

    // Link ke table level_kantor dari field level
    public function levelkantor()
    {
        return $this->belongsTo('App\Models\LevelKantor', 'level','id');
    }

    // Link ke table ms_provinsi dari field prop_naker
    public function provinsi()
    {
        return $this->belongsTo('App\Models\Provinsi', 'prop');
    }

    // Link ke table user dari field created_by
    public function created_r()
    {
        return $this->belongsTo('App\Models\User', 'created_by');
    }

    // Link ke table user dari field updated_by
    public function updated_r()
    {
        return $this->belongsTo('App\Models\User', 'updated_by');
    }
}
