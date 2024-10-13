  json,
    email: varchar('email', { length: 255 }).notNull().unique(),
  userRoles: many(userRoles),
  userPermissions: many(userPermissions),
  contributions: many(contentContributions),
  createdContent: many(contentMetadata),
}))

export const permissions = mysqlTable('permission', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  name: varchar('name', { length: 255 }).notNull().unique(),
  description: text('description'),
  active: boolean('active').notNull().default(true),
  createdAt: timestamp('createdAt', {
    mode: 'date',
    fsp: 3,
  }).default(sql`CURRENT_TIMESTAMP(3)`),
  updatedAt: timestamp('updatedAt', {
    mode: 'date',
    fsp: 3,
  }),
  deletedAt: timestamp('deletedAt', {
    mode: 'date',
    fsp: 3,
  }),
})

export const permissionsRelations = relations(permissions, ({ many }) => ({
  userRoles: many(userRoles),
  rolePermissions: many(rolePermissions),
}))

export const roles = mysqlTable(
  'role',
  {
    id: varchar('id', { length: 255 }).notNull().primaryKey(),
    name: varchar('name', { length: 255 }).notNull().unique(),
    description: text('description'),
    active: boolean('active').notNull().default(true),
    createdAt: timestamp('createdAt', {
      mode: 'date',
      fsp: 3,
    }).default(sql`CURRENT_TIMESTAMP(3)`),
    updatedAt: timestamp('updatedAt', {
      mode: 'date',
      fsp: 3,
    }),
    deletedAt: timestamp('deletedAt', {
      mode: 'date',
      fsp: 3,
    }),
  },
  (role) => ({
    nameIdx: index('name_idx').on(role.name),
  }),
)

export const rolesRelations = relations(roles, ({ many }) => ({
  userRoles: many(userRoles),
  permissions: many(permissions),
}))

export const userRoles = mysqlTable(
  'userRole',
  {
    userId: varchar('userId', { length: 255 }).notNull(),
    roleId: varchar('roleId', { length: 255 }).notNull(),
    active: boolean('active').notNull().default(true),
    createdAt: timestamp('createdAt', {
      mode: 'date',
      fsp: 3,
    }).default(sql`CURRENT_TIMESTAMP(3)`),
    updatedAt: timestamp('updatedAt', {
      mode: 'date',
      fsp: 3,
    }),
    deletedAt: timestamp('deletedAt', {
      mode: 'date',
      fsp: 3,
    }),
  },
  (ur) => ({
    compoundKey: primaryKey({ columns: [ur.userId, ur.roleId] }),
  }),
)

export const userRolesRelations = relations(userRoles, ({ one }) => ({
  user: one(users, { fields: [userRoles.userId], references: [users.id] }),
  role: one(roles, { fields: [userRoles.roleId], references: [roles.id] }),
}))

export const userPermissions = mysqlTable(
  'userPermission',
  {
    userId: varchar('userId', { length: 255 }).notNull(),
    permissionId: varchar('permissionId', { length: 255 }).notNull(),
    active: boolean('active').notNull().default(true),
    createdAt: timestamp('createdAt', {
      mode: 'date',
      fsp: 3,
    }).default(sql`CURRENT_TIMESTAMP(3)`),
    updatedAt: timestamp('updatedAt', {
      mode: 'date',
      fsp: 3,
    }),
    deletedAt: timestamp('deletedAt', {
      mode: 'date',
      fsp: 3,
    }),
  },
  (up) => ({
    compoundKey: primaryKey({ columns: [up.userId, up.permissionId] }),
  }),
)

export const userPermissionsRelations = relations(userPermissions, ({ one }) => ({
  user: one(users, { fields: [userPermissions.userId], references: [users.id] }),
  permission: one(permissions, {
    fields: [userPermissions.permissionId],
    references: [permissions.id],
  }),
}))

export const rolePermissions = mysqlTable(
  'rolePermission',
  {
    roleId: varchar('roleId', { length: 255 }).notNull(),
    permissionId: varchar('permissionId', { length: 255 }).notNull(),
    active: boolean('active').notNull().default(true),
    createdAt: timestamp('createdAt', {
      mode: 'date',
      fsp: 3,
    }).default(sql`CURRENT_TIMESTAMP(3)`),
    updatedAt: timestamp('updatedAt', {
      mode: 'date',
      fsp: 3,
    }),
    deletedAt: timestamp('deletedAt', {
      mode: 'date',
      fsp: 3,
    }),
  },
  (rp) => ({
    compoundKey: primaryKey({ columns: [rp.roleId, rp.permissionId] }),
  }),
)

export const rolePermissionsRelations = relations(rolePermissions, ({ one }) => ({
  role: one(roles, { fields: [rolePermissions.roleId], references: [roles.id] }),
  permission: one(permissions, {
    fields: [rolePermissions.permissionId],
    references: [permissions.id],
  }),
}))

export const contentStates = mysqlTable('contentState', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  slug: varchar('name', { length: 255 }).notNull().unique(),
  title: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  active: boolean('active').notNull().default(true),
  createdAt: timestamp('createdAt', {
    mode: 'date',
    fsp: 3,
  }).default(sql`CURRENT_TIMESTAMP(3)`),
  updatedAt: timestamp('updatedAt', {
    mode: 'date',
    fsp: 3,
  }),
  deletedAt: timestamp('deletedAt', {
    mode: 'date',
    fsp: 3,
  }),
})

export const contentVisibilities = mysqlTable('contentVisibility', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  slug: varchar('name', { length: 255 }).notNull().unique(),
  title: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  active: boolean('active').notNull().default(true),
  createdAt: timestamp('createdAt', {
    mode: 'date',
    fsp: 3,
  }).default(sql`CURRENT_TIMESTAMP(3)`),
  updatedAt: timestamp('updatedAt', {
    mode: 'date',
    fsp: 3,
  }),
  deletedAt: timestamp('deletedAt', {
    mode: 'date',
    fsp: 3,
  }),
})

export const contentContributions = mysqlTable('contentContribution', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  userId: varchar('userId', { length: 255 }).notNull(),
  contentId: varchar('contentId', { length: 255 }).notNull(),
  contributionTypeId: varchar('contributionTypeId', { length: 255 }).notNull(),
  active: boolean('active').notNull().default(true),
  createdAt: timestamp('createdAt', {
    mode: 'date',
    fsp: 3,
  }).default(sql`CURRENT_TIMESTAMP(3)`),
  updatedAt: timestamp('updatedAt', {
    mode: 'date',
    fsp: 3,
  }),
  deletedAt: timestamp('deletedAt', {
    mode: 'date',
    fsp: 3,
  }),
})

export const contentContributionRelations = relations(contentContributions, ({ one }) => ({
  user: one(users, { fields: [contentContributions.userId], references: [users.id] }),
  content: one(contentMetadata, { fields: [contentContributions.contentId], references: [contentMetadata.id] }),
  contributionType: one(contributionTypes, {
    fields: [contentContributions.contributionTypeId],
    references: [contributionTypes.id],
  }),
}))

export const contributionTypes = mysqlTable('contributionType', {
  id: varchar('id', { length: 255 }).notNull().primaryKey(),
  slug: varchar('name', { length: 255 }).notNull().unique(),
  title: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  active: boolean('active').notNull().default(true),
  createdAt: timestamp('createdAt', {
    mode: 'date',
    fsp: 3,
  }).default(sql`CURRENT_TIMESTAMP(3)`),
  updatedAt: timestamp('updatedAt', {
    mode: 'date',
    fsp: 3,
  }),
  deletedAt: timestamp('deletedAt', {
    mode: 'date',
    fsp: 3,
  }),
})

export const contributionTypesRelations = relations(contributionTypes, ({ many }) => ({
  contributions: many(contentContributions),
}))

export const contentMetadata = mysqlTable(
  'contentMetadata',
  {
    id: varchar('id', { length: 255 }).notNull().primaryKey(),
    slug: varchar('name', { length: 255 }).notNull().unique(),
    createdById: varchar('createdById', { length: 255 }).notNull(),
    title: varchar('title', { length: 255 }).notNull(),
    stateId: varchar('stateId', { length: 255 }).notNull(),
    visibilityId: varchar('visibilityId', { length: 255 }).notNull(),
    body: text('body'),
    resources: json('resources'),
    createdAt: timestamp('createdAt', {
      mode: 'date',
      fsp: 3,
    }).default(sql`CURRENT_TIMESTAMP(3)`),
    updatedAt: timestamp('updatedAt', {
      mode: 'date',
      fsp: 3,
    }),
    deletedAt: timestamp('deletedAt', {
      mode: 'date',
      fsp: 3,
    }),
  },
  (cm) => ({
    titleIdx: index('title_idx').on(cm.title),
    slugIdx: index('slug_idx').on(cm.slug),
    createdByIdx: index('createdById_idx').on(cm.createdById),
    stateIdx: index('stateId_idx').on(cm.stateId),
    visibilityIdx: index('visibilityId_idx').on(cm.visibilityId),
  }),
)

export const contentMetadataRelations = relations(contentMetadata, ({ one, many }) => ({
  createdBy: one(users, { fields: [contentMetadata.createdById], references: [users.id] }),
  state: one(contentStates, { fields: [contentMetadata.stateId], references: [contentStates.id] }),
  visibility: one(contentVisibilities, {
    fields: [contentMetadata.visibilityId],
    references: [contentVisibilities.id],
  }),
  contributions: many(contentContributions),