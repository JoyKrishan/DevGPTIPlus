import { IsNotEmpty, IsString, MinLength, ValidateIf } from 'class-validator';
  @ValidateIf((o) => o.accessLevel === 'PROTECTED')