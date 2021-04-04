# frozen_string_literal: true

require_relative './duck'
require_relative './quack'
require_relative './fly_with_wings'

# MallardDuck Class
class MallardDuck < Duck
  def initialize
    super
    @quack_behavior = Quack.new
    @fly_behavior = FlyWithWings.new
  end

  def display
    puts "I'am real Mallard duck"
  end
end
