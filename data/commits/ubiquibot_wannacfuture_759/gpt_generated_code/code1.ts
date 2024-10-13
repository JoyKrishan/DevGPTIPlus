const lastAssignCommentOfHunter = comments
    .filter((comment) => 
        comment.user.type === UserType.Bot && 
        comment.body.includes(assignees[0]) && 
        comment.body.includes(deadLinePrefix))
    .sort((a: Comment, b: Comment) => 
        new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
if (lastAssignCommentOfHunter.length > 0) activities.push(new Date(lastAssignCommentOfHunter[0].created_at));