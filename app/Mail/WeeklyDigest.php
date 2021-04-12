<?php

namespace App\Mail;

use App\Models\Blog;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class WeeklyDigest extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $blogs = Blog::where('created_at', '>', Carbon::now()->subWeek())->get();

        return $this->from('noreply@weblog.nl')
            ->view('emails.weekly-digest')
            ->with([
                'blogs' => $blogs,
            ]);
    }
}
