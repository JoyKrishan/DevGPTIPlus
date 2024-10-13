# no more duplicate code 
# one general function to iterate through list
def get_names(objects):
    names = []
    for obj in objects:
        name = f"{obj.name.first_name} {obj.name.last_name}"
        names.append(name)
    return names


manager_names = get_names(managers)
team_member_names = get_names(team_members)