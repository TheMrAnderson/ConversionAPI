from flask_restplus import Namespace, Resource
from Conversions import area

ns_area = Namespace('Area', description='Area calculations')


@ns_area.route('/Acre/<float:input>/ToSqFt')
@ns_area.route('/Acre/<int:input>/ToSqFt')
class ConversionsArea(Resource):
    def get(self, input):
        return area.acre_to_sq_ft(input)


@ns_area.route('/Acre/<float:input>/ToSqMile')
@ns_area.route('/Acre/<int:input>/ToSqMile')
class ConversionsArea(Resource):
    def get(self, input):
        return area.acre_to_sq_mile(input)


@ns_area.route('/Acre/<float:input>/ToSqYard')
@ns_area.route('/Acre/<int:input>/ToSqYard')
class ConversionsArea(Resource):
    def get(self, input):
        return area.acre_to_sq_yard(input)


@ns_area.route('/SquareFoot/<float:input>/ToAcre')
@ns_area.route('/SquareFoot/<int:input>/ToAcre')
class ConversionsArea(Resource):
    def get(self, input):
        return area.sq_ft_to_acre(input)


@ns_area.route('/SquareFoot/<float:input>/ToSquareInch')
@ns_area.route('/SquareFoot/<float:input>/ToSquareInch')
class ConversionsArea(Resource):
    def get(self, input):
        return area.sq_ft_to_sq_in(input)


@ns_area.route('/SquareInch/<float:input>/ToSquareFoot')
@ns_area.route('/SquareInch/<int:input>/ToSquareFoot')
class ConversionsArea(Resource):
    def get(self, input):
        return area.sq_in_to_sq_ft(input)


@ns_area.route('/SquareMile/<float:input>/ToSquareAcre')
@ns_area.route('/SquareMile/<int:input>/ToSquareAcre')
class ConversionsArea(Resource):
    def get(self, input):
        return area.sq_mile_to_sq_acre(input)


@ns_area.route('/SquareMile/<float:input>/ToAcre')
@ns_area.route('/SquareMile/<int:input>/ToAcre')
class ConversionsArea(Resource):
    def get(self, input):
        return area.sq_mile_to_acre(input)


@ns_area.route('/SquareRod/<float:input>/ToSquareYard')
@ns_area.route('/SquareRod/<int:input>/ToSquareYard')
class ConversionsArea(Resource):
    def get(self, input):
        return area.sq_rod_to_sq_yard(input)


@ns_area.route('/SquareYard/<float:input>/ToAcre')
@ns_area.route('/SquareYard/<int:input>/ToAcre')
class ConversionsArea(Resource):
    def get(self, input):
        return area.sq_yard_to_acre(input)


@ns_area.route('/SquareYard/<float:input>/ToSquareInch')
@ns_area.route('/SquareYard/<int:input>/ToSquareInch')
class ConversionsArea(Resource):
    def get(self, input):
        return area.sq_yard_to_sq_in(input)


@ns_area.route('/SquareYard/<float:input>/ToSquareRod')
@ns_area.route('/SquareYard/<int:input>/ToSquareRod')
class ConversionsArea(Resource):
    def get(self, input):
        return area.sq_yard_to_sq_rod(input)


@ns_area.route('/Circumference/<float:input>')
@ns_area.route('/Circumference/<int:input>')
class ConversionsArea(Resource):
    def get(self, input):
        return area.circumference(input)
