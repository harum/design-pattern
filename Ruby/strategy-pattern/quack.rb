# frozen_string_literal: true

require_relative './quack_behavior'

# Quack Class
class Quack < QuackBehavior
  def quack
    puts 'Quack.'
  end
end
