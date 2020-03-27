# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.delete_all
Item.reset_pk_sequence

Item.create(name: "soda can", general_type: "recycling", subcategory: "metal", note: "Empty and rinse")
Item.create(name: "tuna can", general_type: "recycling", subcategory: "metal", note: "Empty and rinse")
Item.create(name: "pie tin", general_type: "recycling", subcategory: "metal", note: "Empty and rinse")
Item.create(name: "license plate", general_type: "recycling", subcategory: "metal", note: "Empty and rinse")


Item.create(name: "water bottle", general_type: "recycling" , subcategory: "plastic bottles/jars/jugs", note: "Empty and dispose of cap")
Item.create(name: "peanut butter jar", general_type: "recycling" , subcategory: "plastic bottles/jars/jugs", note: "Empty and dispose of cap")
Item.create(name: "milk jug", general_type: "recycling" , subcategory: "plastic bottles/jars/jugs", note: "Empty and dispose of cap")
Item.create(name: "laundry detergent jug", general_type: "recycling" , subcategory: "plastic bottles/jars/jugs", note: "Empty and dispose of cap")


Item.create(name: "wine bottle", general_type: "recycling", subcategory: "glass bottles/jars", note: "Empty and rinse")
Item.create(name: "glass jar", general_type: "recycling", subcategory: "glass bottles/jars", note: "Empty and rinse")
Item.create(name: "beer bottle", general_type: "recycling", subcategory: "glass bottles/jars", note: "Empty and rinse")


Item.create(name: "cereal box", general_type: "recycling", subcategory: "paper/cardboard", note: "Empty and flatten")
Item.create(name: "newspaper", general_type: "recycling", subcategory: "paper/cardboard", note: "Place in trash if wet")
Item.create(name: "cardboard box", general_type: "recycling", subcategory: "paper/cardboard", note: "Empty and flatten")
Item.create(name: "computer paper", general_type: "recycling", subcategory: "paper/cardboard", note: "Empty and flatten")
Item.create(name: "colored paper", general_type: "recycling", subcategory: "paper/cardboard", note: "Empty and flatten")
Item.create(name: "envelopes", general_type: "recycling", subcategory: "paper/cardboard", note: "Empty and flatten")
Item.create(name: "egg carton", general_type: "recycling", subcategory: "paper/cardboard", note: "Empty and flatten")
Item.create(name: "magazines", general_type: "recycling", subcategory: "paper/cardboard", note: "Empty and flatten")
Item.create(name: "paper bag", general_type: "recycling", subcategory: "paper/cardboard", note: "Empty and flatten")


Item.create(name: "aerosol can", general_type: "garbage")
Item.create(name: "napkin/paper towel", general_type: "garbage")
Item.create(name: "ceramics/pottery", general_type: "garbage")
Item.create(name: "juice box", general_type: "garbage")
Item.create(name: "pizza box", general_type: "garbage")
Item.create(name: "styrofoam", general_type: "garbage")
Item.create(name: "butter wrapper", general_type: "garbage")
Item.create(name: "CD case", general_type: "garbage")
Item.create(name: "aluminum foil", general_type: "garbage")
Item.create(name: "batteries", general_type: "garbage")
Item.create(name: "light bulbs", general_type: "garbage")
Item.create(name: "paper towels", general_type: "garbage")
Item.create(name: "styrofoam", general_type: "garbage")
Item.create(name: "diapers", general_type: "garbage")
