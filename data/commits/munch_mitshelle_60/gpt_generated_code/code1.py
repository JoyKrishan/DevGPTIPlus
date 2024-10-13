def get_names(objects):
    names = []
    for obj in objects:
        name = f"{obj.name.first_name} {obj.name.last_name}"
        names.append(name)
    return names

team_members = TeamMember.objects.all()
managers = Manager.objects.all()

manager_names = get_names(managers)
team_member_names = get_names(team_members)

# Reset of the code with managers and team members...

# Now you have two lists: manager_names and team_member_names, containing all the names.