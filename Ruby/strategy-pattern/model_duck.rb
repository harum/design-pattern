# frozen_string_literal: true

require_relative './duck'
require_relative './quack'
require_relative './fly_no_way'

# ModelDuck Class
class ModelDuck < Duck
  def initialize
    super
    @quack_behavior = Quack.new
    @fly_behavior = FlyNoWay.new
  end

  def display
    puts "I'am a model duck"
  end
end
