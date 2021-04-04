# frozen_string_literal: true

require_relative './fly_behavior'

# FlyNoWay Class
class FlyNoWay < FlyBehavior
  def fly
    puts 'Can not fly!'
  end
end
