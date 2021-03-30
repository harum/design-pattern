# frozen_string_literal: true

require '../error/required_implementation_missing_error'

# Clas abc
class DuckoSDF
  def display
    raise CustomError::RequiredImplementationMissingError 'display is not implemented'
  end

  def set_fly_behavior
    puts 'hello'
  end
end
