import pymongo


def main():
    print('Python Mongo..')
    myclient = pymongo.MongoClient("mongodb://localhost:27017/")

    mydb = myclient["socialapp"]

    users = mydb['users'].find()

    for user in users:
        print(user)

    print('Ok')


if __name__ == '__main__':
    main()
