# frozen_string_literal: true

require_relative '../errors/required_implementation_missing_error'

# FlyBehavior Interface
class FlyBehavior
  def fly
    raise CustomError::RequiredImplementationMissingError 'fly is not implemented'
  end
end
