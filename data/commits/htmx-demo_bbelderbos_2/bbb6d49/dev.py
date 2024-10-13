from django.core.paginator import Paginator
    try:
        page_number = int(request.GET.get("page", 1))
    except ValueError:
        context = {
            'movies': [], 'next_page': None,
        }
        return render(request, 'movies/_movies.html', context)

    movies = Movie.objects.all()
    paginator = Paginator(movies, NUMBER_MOVIES_PER_PAGE)
    page = paginator.get_page(page_number)

        'movies': page.object_list,
        'next_page': page_number + 1 if page.has_next() else None,