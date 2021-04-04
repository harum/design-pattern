# frozen_string_literal: true

require_relative '../errors/required_implementation_missing_error'

# Abstract Class Duck
class Duck
  attr_accessor :fly_behavior, :quack_behavior

  def display
    raise CustomError::RequiredImplementationMissingError 'display is not implemented'
  end

  def perform_fly
    @fly_behavior.fly
  end

  def perform_quack
    @quack_behavior.quack
  end

  def swim
    puts 'All ducks float, even decoys!'
  end
end
