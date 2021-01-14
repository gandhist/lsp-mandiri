<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// helper
use App\Helpers\ResponseFormatter;

// model
use App\Models\Kantor;
use App\Models\LevelKantor;
use App\Models\Provinsi;
use App\Models\Kota;

class KantorController extends Controller
{
    public function index(){
        $idlevel = Kantor::select('level')->groupBy('level')->whereNotNull('level')->get()->toArray();
        $level = LevelKantor::whereIn('id',$idlevel)->get();
        $idprop = Kantor::select('prop')->groupBy('prop')->whereNotNull('prop')->get()->toArray();
        $prov = Provinsi::whereIn('id',$idprop)->get();
        $idkota = Kantor::select('kota')->groupBy('kota')->whereNotNull('kota')->get()->toArray();
        $kota = Kota::whereIn('id',$idkota)->get();
        $kantor = Kantor::orderBy('id','asc')->get();
        foreach ($kantor as $key) {
            $kantor->level = $key->levelkantor->nama_level;
            $kantor->prop = $key->provinsi->nama_singkat;
            $kantor->created_by = $key->created_r->name;
            $kantor->updated_by = $key->updated_r->name;
        }

        $data = [$level,$prov,$kota,$kantor];

        return ResponseFormatter::success($data, 'berhasil mengambil data');
    }
}
