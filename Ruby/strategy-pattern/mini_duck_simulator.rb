# frozen_string_literal: true

require_relative './mallard_duck'
require_relative './model_duck'
require_relative './fly_rocket_powered'

# MiniDuckSimulator Class
class MiniDuckSimulator
  def perform
    @mallard = MallardDuck.new
    @mallard.perform_fly
    @mallard.perform_quack

    @model = ModelDuck.new
    @model.perform_fly
    @model.perform_quack
    @model.fly_behavior = FlyRocketPowered.new
    @model.perform_fly
  end
end

simulator = MiniDuckSimulator.new
simulator.perform
