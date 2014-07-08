from django.test import TestCase

# Create your tests here.

import unittest


class QueryDictTest(unittest.TestCase):
    def setUp(self):
        pass

    def test_MultiValueDictKeyError(self):
        from django.http import QueryDict

        dict_ = QueryDict('a=1&a=2&a=3')
        self.assertEqual(dict_['a'], '3')