from tests import HrzTestCase


class ViewTestCase(HrzTestCase):
    def test_index(self):
        response = self.app.get('/')
        self.assertEqual(200, response.status_code, 'Index didn\'t return HTTP 200 OK')
