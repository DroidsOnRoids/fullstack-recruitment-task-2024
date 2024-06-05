export enum DomainErrorType {
  NotFound = 'NotFound',
  AccessDenied = 'AccessDenied',
  PermissionDenied = 'PermissionDenied',
  NonUnique = 'NonUnique',
  DomainRuleViolation = 'DomainRuleViolation',
  ValidationError = 'ValidationError',
  InternalError = 'InternalError',
}

export abstract class DomainError extends Error {
  public readonly name: string;
  public data: Readonly<Record<string, any>>;
  public readonly type: DomainErrorType;
  public readonly status: number;

  constructor(name: string, message: string, type: DomainErrorType, data = {}) {
    super(message);
    this.name = name;
    this.data = data;
    this.type = type;
  }

  getData(): Record<string, any> {
    return this.data;
  }
}

export class NotFoundError extends DomainError {
  constructor(message: string, data?: Readonly<Record<string, any>>) {
    super(NotFoundError.name, message, DomainErrorType.NotFound, data);
  }
}

export class NonUniqueError extends DomainError {
  constructor(message: string, data?: Readonly<Record<string, any>>) {
    super(NonUniqueError.name, message, DomainErrorType.NonUnique, data);
  }
}

export class PermissionDeniedError extends DomainError {
  constructor(message: string, data?: Readonly<Record<string, any>>) {
    super(
      PermissionDeniedError.name,
      message,
      DomainErrorType.PermissionDenied,
      data,
    );
  }
}

export class DomainRuleViolationError extends DomainError {
  constructor(message: string, data?: Readonly<Record<string, any>>) {
    super(
      DomainRuleViolationError.name,
      message,
      DomainErrorType.DomainRuleViolation,
      data,
    );
  }
}

export class ValidationError extends DomainError {
  constructor(message: string, data?: Readonly<Record<string, any>>) {
    super(ValidationError.name, message, DomainErrorType.ValidationError, data);
  }
}

export class InternalError extends DomainError {
  constructor(message: string, data?: Readonly<Record<string, any>>) {
    super(InternalError.name, message, DomainErrorType.InternalError, data);
  }
}
