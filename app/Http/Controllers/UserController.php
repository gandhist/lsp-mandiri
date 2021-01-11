<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

// helper
use App\Helpers\ResponseFormatter;
use Carbon\Carbon;
use Auth;
use Hash;

// model
use App\Models\User;

class UserController extends Controller
{
    //
    // login
    public function login(Request $request){
        try {
            $request->validate([
                'username' => "required",
                'password' => "required",
            ]);
            // cek credentials
            if(!Auth::attempt($request->only('username','password'))){
                return ResponseFormatter::error([
                    'message' => 'unauthorized',
                ], 'unauthenticate', 401);
            }

            // if succcess so login
            $user = User::where('username', $request->username)->first();
            if(!Hash::check($request->password, $user->password, [])){
                // throw new \Exception('Invalid Credentials');
                return ResponseFormatter::error([
                    'message' => 'unauthorized',
                ], 'unauthenticate', 401);
            }

            // jika berhasil maka
            $tokenResult = $user->createToken('authToken')->plainTextToken;
            return ResponseFormatter::success([
                'access_token' => $tokenResult,
                'token_type' => 'Bearer',
                'user' => $user
            ], 'authenticated');
        } 
        catch (Exception $error){
            return ResponseFormatter::error([
                'message' => 'something went wrong',
                'error' => $error
            ], 'authenticated failed', 500);
        }
        
    }

    // get userlist
    public function list(){
        $data = User::all();
        return ResponseFormatter::success($data, 'berhasil mengambil data');
    }

    // get 
    public function get(Request $request){
            return $request->user();
    }

    // store 
    public function store(Request $request){
        $request->validate([
            'name' => ['required','string','max:255'],
            'email' => ['required','string','email','max:255','unique:users'],
        ]);
        $user = User::create([
            'username' => $request->username,
            'name' => $request->name,
            'email' => $request->email,
            'hint' => $request->password,
            'password' => Hash::make($request->password),
        ]);
        return ResponseFormatter::success($user,'Data Berhasil di input');
    }
}
