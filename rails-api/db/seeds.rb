# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'watir'

browser = Watir::Browser.new

browser.goto('https://www.seattle.gov/utilities/services/where-does-it-go#/a-z')
list = browser.element(css: 'ul.aToZList')
    puts list
#.each { |a| puts a['href'] }

Item.delete_all
Item.reset_pk_sequence

Item.create(name: "soda can", general_type: "recycling", subcategory: "metal", note: "Empty and rinse")
Item.create(name: "tuna can", general_type: "recycling", subcategory: "metal", note: "Empty and rinse")
Item.create(name: "pie tin", general_type: "recycling", subcategory: "metal", note: "Empty and rinse")


Item.create(name: "water bottle", general_type: "recycling" , subcategory: "plastic bottles/jars/jugs", note: "Empty and dispose of cap")
Item.create(name: "peanut butter jar", general_type: "recycling" , subcategory: "plastic bottles/jars/jugs", note: "Empty and dispose of cap")
Item.create(name: "milk jug", general_type: "recycling" , subcategory: "plastic bottles/jars/jugs", note: "Empty and dispose of cap")


Item.create(name: "wine bottle", general_type: "recycling", subcategory: "glass bottles/jars", note: "Empty and rinse")
Item.create(name: "olive jar", general_type: "recycling", subcategory: "glass bottles/jars", note: "Empty and rinse")
Item.create(name: "beer bottle", general_type: "recycling", subcategory: "glass bottles/jars", note: "Empty and rinse")


Item.create(name: "cereal box", general_type: "recycling", subcategory: "paper/cardboard", note: "Empty and flatten")
Item.create(name: "newspaper", general_type: "recycling", subcategory: "paper/cardboard", note: "Place in trash if wet")
Item.create(name: "cardboard box", general_type: "recycling", subcategory: "paper/cardboard", note: "Empty and flatten")


Item.create(name: "aerosol can", general_type: "trash")
Item.create(name: "napkin/paper towel", general_type: "trash")
Item.create(name: "ceramics/pottery", general_type: "trash")
Item.create(name: "juice box", general_type: "trash")
Item.create(name: "pizza box", general_type: "trash")
Item.create(name: "styrofoam", general_type: "trash")
