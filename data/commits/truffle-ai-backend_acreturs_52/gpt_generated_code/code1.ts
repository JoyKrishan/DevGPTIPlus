enum ProjectCategory {
  Web = 'Web Development',
  Mobile = 'Mobile Development',
  AI = 'Artificial Intelligence',
  Data = 'Data Analysis',
  Security = 'Security'
}

const project1: ProjectCategory[] = [ProjectCategory.Web, ProjectCategory.Data];
const project2: ProjectCategory[] = [ProjectCategory.Mobile];
const project3: ProjectCategory[] = [ProjectCategory.AI, ProjectCategory.Security];

console.log(project1); // Output: [ 'Web Development', 'Data Analysis' ]
console.log(project2); // Output: [ 'Mobile Development' ]
console.log(project3); // Output: [ 'Artificial Intelligence', 'Security' ]