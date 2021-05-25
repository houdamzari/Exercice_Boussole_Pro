<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CredentialsResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'firstname' => $this->FirstName,
            'lastname' => $this->LastName,
        ];
    }
    }

