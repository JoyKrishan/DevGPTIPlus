        scanf(
#ifdef HAVE_LFORTRAN_MACHO
            "line %lld\n"
#else
            "line %ld\n"
#endif
            , p);
        fscanf(filep,
#ifdef HAVE_LFORTRAN_MACHO
            "line %lld\n"
#else
            "line %ld\n"
#endif
            , p);