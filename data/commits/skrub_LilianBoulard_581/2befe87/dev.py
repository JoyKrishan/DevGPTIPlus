    overload_job_titles: bool = True,
    overload_job_titles : bool, default=True
        Uses the column `underfilled_job_title` to enrich the
        `employee_position_title` column, as it contains more detailed
        information about the job title.

        if overload_job_titles:
            dataset.X["employee_position_title"] = dataset.X[
                "underfilled_job_title"
            ].fillna(dataset.X["employee_position_title"])
            dataset.X.drop(
                labels=["underfilled_job_title"], axis="columns", inplace=True
            )