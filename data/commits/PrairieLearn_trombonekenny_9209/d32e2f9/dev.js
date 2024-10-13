async function verifyRoleAssignmentsInDatabase(roleAssignments, assessmentId) {
  const expected = roleAssignments
    .map(({ roleId, groupUserId }) => ({
      user_id: groupUserId,
      group_role_id: roleId,
    }))
    .sort((a, b) => a.user_id - b.user_id || a.group_role_id - b.group_role_id);
}
    await verifyRoleAssignmentsInDatabase(locals.roleUpdates, locals.assessment_id);