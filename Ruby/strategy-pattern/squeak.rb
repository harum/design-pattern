# frozen_string_literal: true

require_relative './quack_behavior'

# Squeak Class
class Squeak < QuackBehavior
  def quack
    puts 'Squeak.'
  end
end
