<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Test;
use App\Http\Requests\CrededentialsRequest;
use App\Http\Resources\CredentialsResource;
use Symfony\Component\HttpKernel\Exception\HttpException;
class HomeController extends Controller
{
    //
    public function  store(CrededentialsRequest $request){
        try{
        $user = new Test;
        $user->FirstName = $request->firstname;
        $user->LastName = $request->lastname;
        $user->save();
}
        catch (\Exception $e) {
        throw new HttpException(500, $e->getMessage());
}
        return new CredentialsResource($user);

            }
    public function  index(){
        return Test::all();
    }
}
