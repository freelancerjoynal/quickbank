<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class RoleChecker
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Check if the authenticated user has role 1 or 2
        if (auth()->user()->role === 0) {
            return redirect()->route('my.account');

        }elseif  (  auth()->user()->role !== 1 && auth()->user()->role !== 2 ){

            return redirect()->route('role.logout');
        }


        return $next($request);
    }
}
