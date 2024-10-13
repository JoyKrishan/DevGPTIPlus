  }

// CompanyRegister.tsxで使用
export interface CompanyResisterFormState {
  companyName: string | null;
  industry: string | null;
  address: string | null;
  telephoneNumber: string | null;
  companyWebsite: string | null;
  department: string | null;
  post: string | null;
  name: string | null;
  email: string | null;
  }

// CompanyRegister.tsxで使用
export interface CompanyResisterFormErrors {
    [key: string]: string;
  }