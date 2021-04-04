# frozen_string_literal: true

require_relative '../errors/required_implementation_missing_error'

# QuackBehavior Interface
class QuackBehavior
  def quack
    raise CustomError::RequiredImplementationMissingError 'quack is not implemented'
  end
end
