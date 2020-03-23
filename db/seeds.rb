# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.delete_all
Item.reset_pk_sequence

Item.create(name: "soda can", type: "recycling", subcategory: "metal", note: "Empty and rinse")
Item.create(name: "tuna can", type: "recycling", subcategory: "metal", note: "Empty and rinse")
Item.create(name: "pie tin", type: "recycling", subcategory: "metal", note: "Empty and rinse")


Item.create(name: "water bottle", type: "recycling" , subcategory: "plastic bottles/jars/jugs", note: "Empty and dispose of cap")
Item.create(name: "peanut butter jar", type: "recycling" , subcategory: "plastic bottles/jars/jugs", note: "Empty and dispose of cap")
Item.create(name: "milk jug", type: "recycling" , subcategory: "plastic bottles/jars/jugs", note: "Empty and dispose of cap")


Item.create(name: "wine bottle", type: "recycling", subcategory: "glass bottles/jars", note: "Empty and rinse")
Item.create(name: "olive jar", type: "recycling", subcategory: "glass bottles/jars", note: "Empty and rinse")
Item.create(name: "beer bottle", type: "recycling", subcategory: "glass bottles/jars", note: "Empty and rinse")


Item.create(name: "cereal box", type: "recycling", subcategory: "paper/cardboard", note: "Empty and flatten")
Item.create(name: "newspaper", type: "recycling", subcategory: "paper/cardboard", note: "Place in trash if wet")
Item.create(name: "cardboard box", type: "recycling", subcategory: "paper/cardboard", note: "Empty and flatten")


Item.create(name: "aerosol can", type: "trash", subcategory: , note: )
Item.create(name: "napkin/paper towel", type: "trash", subcategory: , note: )
Item.create(name: "ceramics/pottery", type: "trash", subcategory: , note: )
Item.create(name: "juice box", type: "trash", subcategory: , note: )
Item.create(name: "pizza box", type: "trash", subcategory: , note: )
Item.create(name: "styrofoam", type: "trash", subcategory: , note: )
