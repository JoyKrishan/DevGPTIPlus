
## Creating a release 🚀

### Prerequisites

You need to have an admin access setup locally to the `@swarmion` organization on the npm registry to be able to publish new versions of the packages.

### Usage

1. Make sure you are on the `main` branch and that the branch is up-to-date with the remote
1. Run the script with the necessary command-line arguments:

   ```bash
   ./release.sh <RELEASE_TYPE> [TARGET_VERSION]
   ```

   - `<RELEASE_TYPE>`: The type of release to perform (e.g., major, minor, patch, premajor, preminor, prepatch, or prerelease).
   - `[TARGET_VERSION]` (optional): The target version to set explicitly. If not provided, lerna will generate the version automatically.

1. After the script finished and a new tag is pushed, a new run of the [🔖 Release workflow](https://github.com/swarmion/swarmion/actions/workflows/release.yml) will be triggered. This workflow will create a draft GitHub release. Go ahead and review the release notes and publish the release.

### `release.sh` Bash Script Documentation

The `release.sh` script is a Bash script that automates the release process for swarmion. It performs the following actions:

1. Retrieves the release type from the first command-line argument (`$RELEASE_TYPE`) and optionally the target version from the second argument (`$TARGET_VERSION`).
2. Determines if an alpha release is required based on the release type.
3. Sets the new version for the project using `lerna version` command, either by generating it automatically or using the target version.
4. Ensures that all packages are up-to-date by running `pnpm install`, `pnpm package`, and `pnpm build`.
5. Creates a release commit with a signed message containing the new version.
6. Publishes the new version to npm, either as a regular release or an alpha release.
7. Waits for the changes to be available on npm for a brief period.
8. Upgrades packages in the project's examples to the new version.
9. Creates a tag for the new version and pushes the changes to the remote repository.

### Examples:

```bash
./release.sh patch
```

```bash
./release.sh premajor 2.0.0-alpha.1
```