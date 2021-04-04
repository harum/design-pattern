# frozen_string_literal: true

require_relative './fly_behavior'

# FlyRocketPowered Class
class FlyRocketPowered < FlyBehavior
  def fly
    puts "I'm flying with a rocket!"
  end
end
