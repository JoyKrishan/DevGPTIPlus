        assert datetime.fromtimestamp(from_delta).date() == (
            datetime.fromtimestamp(timestamp).date()
        )
        assert datetime.fromtimestamp(from_int).date() == (
            datetime.fromtimestamp(timestamp).date()
        )
    @pytest.mark.skipif(
        not sys.platform.startswith("win"),
        reason="windows does not support sub second precision",
    )
    @pytest.mark.skipif(
        sys.platform.startswith("win"),
        reason="non windows does support sub second precision",
    )
    def test_date_time_between_dates_with_no_date_overlap(self):
        with pytest.raises(ValueError):
            self.fake.date_time_between_dates("-1y", "-2y")

        random_date_naive = self.fake.date_time_between_dates(
            datetime_start, datetime_end
        )
        random_date = self.fake.date_time_between_dates(
            datetime_start, datetime_end, utc
        )
        assert self._datetime_to_time(
            self.fake.date_time_this_century(after_now=False)
        ) <= self._datetime_to_time(datetime.now())
            self._datetime_to_time(
                self.fake.date_time_this_century(before_now=True, after_now=True)
            )
        assert self._datetime_to_time(
            self.fake.date_time_this_decade(after_now=False)
        ) <= self._datetime_to_time(datetime.now())
            self._datetime_to_time(
                self.fake.date_time_this_decade(before_now=True, after_now=True)
            )
        assert self._datetime_to_time(
            self.fake.date_time_this_year(after_now=False)
        ) <= self._datetime_to_time(datetime.now())
        assert self._datetime_to_time(
            self.fake.date_time_this_month(after_now=False)
        ) <= self._datetime_to_time(datetime.now())
            self.fake.date_time_this_century(
                before_now=False, after_now=True, tzinfo=utc
            ) >= datetime.now()
            self.fake.date_time_this_decade(
                after_now=False, tzinfo=utc
            ) <= datetime.now()
            self.fake.date_time_this_month(
                after_now=False, tzinfo=utc
            ) <= datetime.now()
        assert self.fake.date_time_this_century(
            after_now=False, tzinfo=utc
        ) <= datetime.now(utc)
        assert self.fake.date_time_this_century(
            before_now=False, after_now=True, tzinfo=utc
        ) >= datetime.now(utc)
        assert self.fake.date_time_this_century(
            before_now=False, after_now=False, tzinfo=utc
        ).replace(second=0, microsecond=0) == datetime.now(utc).replace(
        )
        assert self.fake.date_time_this_decade(
            after_now=False, tzinfo=utc
        ) <= datetime.now(utc)
        assert self.fake.date_time_this_decade(
            before_now=False, after_now=True, tzinfo=utc
        ) >= datetime.now(utc)

        assert self.fake.date_time_this_decade(
            before_now=False, after_now=False, tzinfo=utc
        ).replace(second=0, microsecond=0) == datetime.now(utc).replace(
        )
        assert self.fake.date_time_this_year(
            after_now=False, tzinfo=utc
        ) <= datetime.now(utc)
        assert self.fake.date_time_this_year(
            before_now=False, after_now=True, tzinfo=utc
        ) >= datetime.now(utc)
        assert self.fake.date_time_this_year(
            before_now=False, after_now=False, tzinfo=utc
        ).replace(second=0, microsecond=0) == datetime.now(utc).replace(
        )
        assert (
            self.fake.date_time_this_year(
                before_now=True, after_now=True, tzinfo=utc
            ).year
            == datetime.now(utc).year
        )
        assert self.fake.date_time_this_month(
            after_now=False, tzinfo=utc
        ) <= datetime.now(utc)
        assert self.fake.date_time_this_month(
            before_now=False, after_now=True, tzinfo=utc
        ) >= datetime.now(utc)
        assert self.fake.date_time_this_month(
            before_now=False, after_now=False, tzinfo=utc
        ).replace(second=0, microsecond=0) == datetime.now(utc).replace(
        )
            self.fake.date_time_this_month(
                before_now=True, after_now=True, tzinfo=utc
            ).month
            == datetime.now(utc).month
            self.fake.date_time_this_month(
                before_now=True, after_now=True, tzinfo=utc
            ).year
            == datetime.now(utc).year
            self.fake.date_this_century(before_today=True, after_today=True).strftime(
                "%G"
            )[:2]
        assert (
            self.fake.date_this_century(before_today=False, after_today=True)
            >= date.today()
        )
        assert (
            self.fake.date_this_century(before_today=False, after_today=False)
            == date.today()
        )
            self.fake.date_this_decade(before_today=True, after_today=True).strftime(
                "%G"
            )[:3]
        assert (
            self.fake.date_this_decade(before_today=False, after_today=True)
            >= date.today()
        )
        assert (
            self.fake.date_this_decade(before_today=False, after_today=False)
            == date.today()
        )
        assert (
            self.fake.date_this_year(before_today=True, after_today=True).year
            == datetime.now().year
        )
        assert (
            self.fake.date_this_year(before_today=False, after_today=True)
            >= date.today()
        )
        assert (
            self.fake.date_this_year(before_today=False, after_today=False)
            == date.today()
        )
        assert (
            self.fake.date_this_month(before_today=True, after_today=True).month
            == datetime.now().month
        ) and (
            self.fake.date_this_month(before_today=True, after_today=True).year
            == datetime.now().year
        assert (
            self.fake.date_this_month(before_today=False, after_today=True)
            >= date.today()
        )
        assert (
            self.fake.date_this_month(before_today=False, after_today=False)
            == date.today()
        )
        random_datetime = self.fake.date_time_between(
            start_date="-30y", end_date="-20y"
        )
        random_datetime = self.fake.date_time_between(
            start_date="-30y", end_date="-20y", tzinfo=utc
        )
        series = list(
            self.fake.time_series(start_date=start, end_date=end, tzinfo=start.tzinfo)
        )
            constrained_unix_time = self.fake.unix_time(
                end_datetime=end_datetime, start_datetime=start_datetime
            )
            distant_unix_time = self.fake.unix_time(
                end_datetime=one_day_after_epoch_start
            )
    @pytest.mark.skipif(
        not sys.platform.startswith("win"),
        reason="windows does not support sub second precision",
    )
    @pytest.mark.skipif(
        sys.platform.startswith("win"),
        reason="non windows does support sub second precision",
    )
            assert (
                days_since_six_years_ago > days_since_dob >= days_since_five_years_ago
            )
            assert (
                days_since_one_hundred_eleven_years_ago
                > days_since_dob
                >= days_since_one_hundred_years_ago
            )