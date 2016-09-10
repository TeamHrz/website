import os
import unittest
os.environ.setdefault('HRZ_CONFIG', 'conf.py')

from hrz import hrz


class HrzTestCase(unittest.TestCase):
    """
    Horizon test base class
    """
    def setUp(self):
        self.app = hrz.app.test_client()
