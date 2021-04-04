# frozen_string_literal: true

require_relative './quack_behavior'

# MuteQuack Class
class MuteQuack < QuackBehavior
  def quack
    puts 'Silence.'
  end
end
