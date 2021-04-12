<h3 class="h3">Dear Subscriber</h3>

<h1 class="h1">These are our latest blogs:</h1>

@foreach($blogs as $blog)

    <div class="row mb-3">
        <div class="col card">
            <div class="card-header">
                <h3 class="h3">{{ $blog->title }}</h3>
                <p>By: {{ $blog->user->name }}</p>
                <p>Categories: {{ join(', ', $blog->categories) }}</p>
            </div>
            <div class="card-body">
                {{ $blog->content }}
            </div>
            <div class="card-footer">
                {{ $blog->created_at->format('d-M-Y') }}
            </div>
        </div>
    </div>

@endforeach

<p>Read them all before next week!</p>

<p>Greetings Weblogs.nl staff</p>
