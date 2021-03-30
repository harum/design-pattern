# frozen_string_literal: true

# Module for custom error
module CustomError
  # Error required implementation missing
  # This should be raised in methods of interface or abstract class
  class RequiredImplementationMissingError < NoMethodError
    def initialize(message = 'Required implementation missing')
      super(message)
    end
  end
end
